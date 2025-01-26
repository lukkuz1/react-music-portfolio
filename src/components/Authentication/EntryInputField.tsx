import React from 'react';
import './EntryInputField.css';

type Props = {
  headerText: string;
  placeholderText: string;
  isPassword: boolean;
  postfix?: string;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  margin?: [top: number, bottom: number, left: number, right: number];
  onChangeText: (text: string) => void;
  keyboardType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}

export default function EntryInputField({
  headerText,
  placeholderText,
  isPassword,
  margin = [0, 0, 0, 0],
  keyboardType,
  style,
  headerStyle,
  postfix = "",
  onChangeText,
}: Props) {

  const inputType = isPassword ? 'password' : keyboardType || 'text';

  return (
    <div
      className="entry-input-field"
      style={{
        marginTop: margin[0],
        marginBottom: margin[1],
        marginLeft: margin[2],
        marginRight: margin[3],
        ...style
      }}
    >
      <label className="input-header" style={headerStyle}>
        {headerText}
      </label>
      <div className="input-container">
        <input
          type={inputType}
          placeholder={placeholderText}
          className="input-field"
          onChange={(e) => onChangeText(e.target.value)}
          autoComplete="off"
        />
        {postfix && <span className="input-postfix">{` ${postfix}`}</span>}
      </div>
    </div>
  );
}
