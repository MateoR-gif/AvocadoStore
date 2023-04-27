import Link from "next/link";
import React from "react";
import styles from "../Navbar.module.css";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/pages/about",
  },
  {
    label: "Product",
    route: "/pages/product",
  },
];

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className={styles.ul}>
          {links.map(({ route, label }) => (
            <li key={route} className={styles.li}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
