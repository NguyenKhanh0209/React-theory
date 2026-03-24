import RobotAvatar from "../assets/494643591_1753766695542434_3806171540582182133_n.jpg";
import UserAvatar from "../assets/as.jpg";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-bot"}
    >
      {" "}
      {sender === "bot" && (
        <img src={RobotAvatar} width="50" style={{ borderRadius: "100%" }} />
      )}{" "}
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "10px",
          maxWidth: "300px",
        }}
      >
        {message}
      </div>
      {sender === "user" && (
        <img
          src={UserAvatar}
          width="50"
          height="50"
          style={{ borderRadius: "100%" }}
        />
      )}
    </div>
  );
}
