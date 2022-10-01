import { Link } from "react-router-dom";

function Breadcrumb({ data }) {
  return (
    <div aria-label="breadcrumb">
      <ol class="breadcrumb">
        <i class="home-icon fa-solid fa-house-user"></i>
        {data.map((item, idx) => (
          <li
            class={
              data.length === idx + 1
                ? "breadcrumb-item"
                : "breadcrumb-item active"
            }
            aria-current={data.length === idx + 1 ? "page" : ""}
          >
            <Link to={data.length === idx + 1 ? "" : item.href}>
              {item.path}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Breadcrumb;
