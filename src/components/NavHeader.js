import NavButton from "./NavButton";
import SearchBar from "./SearchBar";

export default function HeaderNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="d-inline-flex">
        <NavButton />
        <SearchBar />
      </div>
    </nav>
  );
}
