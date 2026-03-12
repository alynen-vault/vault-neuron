import { useState } from "react";
import { C, PAGES } from "./tokens";
import { Nav, Footer } from "./Nav";
import HomePage       from "./HomePage";
import SolutionsPage  from "./SolutionsPage";
import AboutPage      from "./AboutPage";
import VaultPage      from "./VaultPage";
import AssessmentPage from "./AssessmentPage";

export default function App() {
  const [page, setPage] = useState("Home");

  const changePage = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.white }}>
      <Nav page={page} setPage={changePage}/>
      {page === "Home"       && <HomePage       setPage={changePage}/>}
      {page === "Solutions"  && <SolutionsPage  setPage={changePage}/>}
      {page === "About"      && <AboutPage      setPage={changePage}/>}
      {page === "The Vault"  && <VaultPage      setPage={changePage}/>}
      {page === "Assessment" && <AssessmentPage/>}
      <Footer setPage={changePage}/>
    </div>
  );
}
