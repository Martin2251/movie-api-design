import MainContent from "../Components/MainContent";
import React from "react";
import { render } from "@testing-library/react";
import { Pagination } from "react-bootstrap";
import { Box } from "@material-ui/core";

test("Some test", () => {
  render(
    <Box>
      <Pagination></Pagination>
    </Box>
  );
});
