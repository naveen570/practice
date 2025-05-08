import { AddForm } from "../components/add-form";
import { useAppSelector } from "../store/hook";

const Home = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <div>
      Home
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <AddForm />
    </div>
  );
};

export default Home;
