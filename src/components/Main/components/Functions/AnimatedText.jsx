import './AnimatedText.scss'

export default function AnimatedText({ text, delay }) {
  return (
    <span className="Animation_Wrapper">
      {text.split("").map((letter, index) => (
        <span key={index} style={{ animationDelay: `${index * delay}s` }}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}
