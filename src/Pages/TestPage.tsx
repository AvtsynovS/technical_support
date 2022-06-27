import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';
import { useEffect } from 'react';

const TestPage: React.FC = () => {
  const { users, error, loading } = useTypeSelector((state) => state.user);
  const { fetchUsers } = useActions();
  console.log({ users, error, loading });

  useEffect(() => {
    fetchUsers();
  });

  if (loading) {
    return <div>'Идет загрузка...'</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {users.map((user) => {
        return user.fullName;
      })}
    </div>
  );
};

export default TestPage;
