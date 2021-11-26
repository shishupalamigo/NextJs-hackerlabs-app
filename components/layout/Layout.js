
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div className="bg-green-50">
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
