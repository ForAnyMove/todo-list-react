import '../styles/footer.css';

function AppFooter() {
    return (
        <footer class="footer">
            <p> items left</p>
            <ul class="filter">
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>
            <p>Clear Completed</p>
        </footer>
    );
  }
  
  export default AppFooter;