import { useEffect } from "react";
import { useParams } from "react-router-dom";

function UserEdit() {
  const userId = useParams();
  useEffect(() => {
    console.log(userId.id);
  });
  return <div>UserEdit {userId.id}</div>;
}

export default UserEdit;
