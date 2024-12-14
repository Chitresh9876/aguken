import { useRouter } from "next/router";

const DashboardSection = () => {
  const router = useRouter();
  const { section } = router.query;

  return (
    <div>
      <h1>{section} Section</h1>
      <p>Dynamic content for {section}</p>
    </div>
  );
};

export default DashboardSection;
