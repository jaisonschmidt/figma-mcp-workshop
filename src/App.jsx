import './App.css';
import profilePhoto from './assets/profile-photo.png';

function App() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Logo</div>
        <div className="nav-menu">
          <a href="#about" className="nav-link">About me</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#project" className="nav-link">Project</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-left">
          <h1 className="main-title">Hi! I'm Shiella</h1>
          <p className="main-description">
            Lorem ipsum dolor sit amet consectetur. Nunc augue lorem facilisi ac 
            lorem. Quam scelerisque vulputate proin blandit proin nisl magna 
            sagittis turpis.
          </p>
          <div className="button-group">
            <button className="btn-primary">Contact me</button>
            <button className="btn-secondary">See my project</button>
          </div>
        </div>
        
        <div className="content-right">
          <div className="photo-container">
            <div className="photo-blur-bg"></div>
            <img src={profilePhoto} alt="Shiella" className="profile-photo" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
