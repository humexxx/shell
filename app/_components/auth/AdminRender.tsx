import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminRender = ({ children }: Props) => {
  const auth = { isAdmin: true }; // Replace this with your auth logic

  return auth.isAdmin ? children : null;
};

export default AdminRender;
