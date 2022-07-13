import NavButton from "./NavButton";
import NavSearchBar from "./NavSearchBar";

export default function NavHeader() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="d-inline-flex">
        <NavButton />
        <NavSearchBar />
      </div>
    </nav>
  );
}
