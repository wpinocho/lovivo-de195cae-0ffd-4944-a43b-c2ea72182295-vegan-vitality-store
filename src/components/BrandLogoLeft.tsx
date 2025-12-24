export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center gap-3">
      {/* TEMPLATE: Replace /logo.svg with your brand logo */}
      <img 
        src="/logo.jpg" 
        alt="Vegan Supplements Logo"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold text-primary">Vegan Supplements</span>';
        }}
      />
      <span className="text-xl font-bold text-foreground hidden sm:block">
        Vegan Supplements
      </span>
    </a>
  )
}