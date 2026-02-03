export function PaperTexture() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5] opacity-80"
      style={{
        backgroundImage: `url("/textures/dotnoise-light-grey.png")`,
        backgroundRepeat: "repeat",
      }}
      aria-hidden="true"
    />
  );
}
