export default function NavSearchBar() {
  return (
    <form className="d-flex" style={{ width: "500px" }} role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}
