export default function Layout({
    children,
    modal,
  }: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
  }>) {
    return (
      <main>
        {children}
        {modal}
      </main>
    );
  }