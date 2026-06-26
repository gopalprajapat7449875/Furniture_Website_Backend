const nodemailer = require("nodemailer");

var slugify = require("slugify");
const UserAdminUseadd = require("../Model/UserForAdminand");
const saltRounds = 10;
const bcrypt = require("bcrypt");
let createSlug = (title) => {
  return slugify(title, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: "vi", // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4,

  // Use true for port 465, false for port 587
  auth: {
    user: process.env.USERFOREMAIL,
    pass: process.env.USERPASSWORD,
  },
});

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "gopalprajapat7449895@gmail.com",
//     pass: "lglf mnwq fzpx nvsc",
//   },
//   tls: {
//     rejectUnauthorized: false, // helps on some Railway environments
//   },
//   socketOptions: {
//     family: 4, // ✅ Force IPv4 — prevents IPv6 ENETUNREACH on Railway
//   },
// });


let AdminCreate = async () => {

  let admindata = await UserAdminUseadd.find();

  if (admindata.length === 0) {
    const hash = bcrypt.hashSync("prajapat7449875", saltRounds);
    await UserAdminUseadd.insertOne({
      _UserEmail: "gopalprajapat7449875@gmail.com",
      _UserPassword: hash
    });


  }

}


const { Server } = require("socket.io");

let io;

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: [
        "https://furniture-monsta.vercel.app",
        "https://furniture-website-admin-panel-rho.vercel.app",
        "http://localhost:3000"
      ],

      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Socket Connected:", socket.id);

    socket.on("join_admin", () => {
      socket.join("admin");
      console.log("Admin Joined");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.id);
    });
  });

  return io;
};

const getIO = () => io;



module.exports = { createSlug, transporter, AdminCreate, initSocket, getIO }