function HomePage() {
  return (
    <div>
        <h1>the Home Page</h1>
        <ul>
            <li>
                <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link href="/clients/1">Client 1</Link>
            </li>
        </ul>
    </div>
  );
}

export default HomePage;