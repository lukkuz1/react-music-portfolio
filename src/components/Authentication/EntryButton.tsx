import React from 'react';
import './EntryButton.css';

type Props = {
  text: string;
  textColor: string;
  buttonColor: string;
  margin?: [top: number, bottom: number, left: number, right: number];
  style?: React.CSSProperties;
  onPress?: () => void;
}

export default function EntryButton({ text, textColor, buttonColor, margin = [0, 0, 0, 0], style, onPress }: Props) {
  return (
    <div
      className="entry-button"
      style={{
        backgroundColor: buttonColor,
        marginTop: margin[0],
        marginBottom: margin[1],
        marginLeft: margin[2],
        marginRight: margin[3],
        ...style
      }}
      onClick={onPress}
    >
      <span className="entry-button-text" style={{ color: textColor }}>
        {text}
      </span>
    </div>
  );
}
