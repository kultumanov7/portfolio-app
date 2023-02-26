import React from "react";

const Header = () => {
  const headerNav = ["About", "Experience", "Projects", "Contacts"];

  const scrollTo = (target) => {
    console.log(target);
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigateHome = () => {
    window.location.href = "/";
  };

  return (
    <header className="header">
      <h2 style={{ cursor: "pointer" }} onClick={handleNavigateHome}>
        Aldiyar
      </h2>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {headerNav.map((el) => (
          <li
            style={{
              paddingLeft: "30px",
              fontFamily: "Inter",
              fontSize: 15,
              cursor: "pointer",
            }}
            onClick={() => scrollTo(el.toLowerCase())}
          >
            {el}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
