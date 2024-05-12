import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "Pash26s",
    name: "PASH",
    isFollowing: true,
  },
  {
    userName: "IrvingGatell",
    name: "Irving Gatell",
    isFollowing: false,
  },
  {
    userName: "MElenaPerezJaen",
    name: "Ma Elene Perez-Jaen",
    isFollowing: true,
  },
  {
    userName: "rthur013",
    name: "LaAbuela Garcia",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
