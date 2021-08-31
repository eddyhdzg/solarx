import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { Seo, GridItem, PageTitle, SectionButton } from "components";
import { useHeader } from "hooks";

export default function AdminHome() {
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: undefined, url: undefined });
  }, [onChangeRoute]);

  return (
    <>
      <Seo title="Admin" description="Admin section." />
      <PageTitle>Admin</PageTitle>
      <Grid container spacing={3}>
        <GridItem xxs={12} xs={6} sm={4} md={3} xl={2}>
          <SectionButton title="Projects" to="/admin/projects" emoji="💼" />
        </GridItem>
        <GridItem xxs={12} xs={6} sm={4} md={3} xl={2}>
          <SectionButton title="Users" to="/admin/users" emoji="👥" />
        </GridItem>
      </Grid>
    </>
  );
}
