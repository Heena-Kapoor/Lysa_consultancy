'use client';
import React from "react";
import styles from "./Whatsappintegration.module.css";
import { Box, Fab } from "@mui/material";
import Link from "next/link";

const Whatsappintegration = () => {
  return (
    <Link href="https://wa.me/+918595363651" target="_blank">
      <Box
        className={styles.wtp1}
        sx={{ "& > :not(style)": { m: 1 }, zIndex: "80000" }}
      >
        <Fab aria-label="whatsapp" className={styles.wtp}>
          <i
            className="fab fa-whatsapp"
            style={{ color: "#fff", fontSize: "42px" }}
          ></i>
        </Fab>
      </Box>
    </Link>
  );
};

export default Whatsappintegration;
