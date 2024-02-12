import InstagramButton from "./instagram-button"
import LinkEdinButton from "./linkedin-button"
import PortfolioButton from "./portfolio-button"

export default function Footer() {
  return (
    <footer className="bottom-0 py-2 fixed">
      <div className="flex space-x-4">
        <span className="text-sm text-secondary-foreground">
          Feito por{" "}
          <a
            target="_blank"
            href="https://github.com/euvitordev"
            className="underline underline-offset-4"
          >
            Vitor Lucas
          </a>{" "}
        </span>

        <div className="flex items-center space-x-2">
          <InstagramButton />
          <LinkEdinButton />
          <PortfolioButton />
        </div>
      </div>
    </footer>
  )
}
