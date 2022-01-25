import { PageTitleTypography } from "./PageTitle.styled";

const PageTitle: React.FC = ({ children }) => {
  return (
    <PageTitleTypography component="h1" variant="h3">
      {children}
    </PageTitleTypography>
  );
};

export default PageTitle;
