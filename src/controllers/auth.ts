import { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import { envConfig } from "../config/config";

const _clientId = envConfig.client_id;
const _clientSecret = envConfig.google_secret;

const googleClient = new OAuth2Client(_clientId, _clientSecret);

export const Login = async (req: Request, res: Response) => {
  try {
    const { credential, clientId } = req.body;
    console.log(_clientId);
    console.log("......................" + _clientId);

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: clientId,
    });

    const payload = ticket.getPayload();

    if (!payload) {
      return res.status(400).json({ error: "Invalid token" });
    }

    const userDetails = {
      googleId: payload["sub"],
      email: payload["email"],
      name: payload["name"],
      picture: payload["picture"],
    };

    const token = jwt.sign(userDetails, _clientSecret as string, {
      expiresIn: "24h",
    });

    res.json({
      user: userDetails,
      token,
    });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(500).json({ error: "Authentication failed" });
  }
};
