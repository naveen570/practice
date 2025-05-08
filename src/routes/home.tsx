import { useAppDispatch, useAppSelector } from "../store/hook";
import { rSetUser } from "../store/user-slice";

const Home = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <div>
      Home
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button
        onClick={() => {
          dispatch(
            rSetUser({
              email: "a@b.com",
              id: "1",
              name: "test",
              token: "token",
            })
          );
        }}
      >
        set User data
      </button>
    </div>
  );
};

export default Home;
