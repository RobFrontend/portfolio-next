export const revalidate = 1;
// export const revalidate = 15;
function Footer() {
  return (
    <div className="p-8">
      <p className="text-center tracking-[-1px]">
        &copy;{new Date().getFullYear()} Robert Grabowski
      </p>
    </div>
  );
}

export default Footer;
