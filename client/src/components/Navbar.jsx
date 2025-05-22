import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-semibold tracking-tight">Notes</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          {user ? (
            <Button variant="ghost" asChild>
              <Link to="/notes">My Notes</Link>
            </Button>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="default" asChild>
                <Link to="/register">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 