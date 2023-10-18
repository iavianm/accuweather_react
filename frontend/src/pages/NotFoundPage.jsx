import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>404: Page Not Found</h1>
      <Button variant="contained" color="primary" onClick={handleGoBack}>
        Back
      </Button>
    </div>
  );
}

export default NotFoundPage;
