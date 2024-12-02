import * as React from "react";
import { Outlet } from "react-router-dom";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

export default function Layout() {
  return (
    <DashboardLayout>
      <PageContainer
        sx={{
          "& > .MuiStack-root": {
            marginTop: 0,
          },
          "& > .MuiStack-root > .MuiStack-root": {
            position: "sticky",
            top: 0,
            backgroundColor: "background.paper",
            zIndex: 10,
            paddingY: 2,
          },
        }}
      >
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
