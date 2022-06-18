import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Breadcrumbs, Link } from "@mui/material";
import * as React from "react";


//install react router

const handleClick = (event : MouseEvent) => {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BasicBreadcrumbs = () => {
  return (
    <div role="presentation" onClick={() => handleClick}>
      <Breadcrumbs aria-label="breadcrumb"  separator="">
        <div style={{ backgroundColor: "#1181d1" }}>
          <Link underline="hover" color="white" href="/">
            Accounts
          </Link>
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </div>
        <Link
          underline="hover"
          color="white"
          href="/material-ui/getting-started/installation/"
        >
          Sales leads
        </Link>
      </Breadcrumbs>
    </div>
  );
}
export default BasicBreadcrumbs;
