import React from "react";
import "./App.css";

export default function App() {
  return(
    <>
      <div className="chess_board">
      <table>
            <tr>
                <td className="white"><i class="fa-solid fa-chess-rook"></i></td>
                <td className="black"><i class="fa-solid fa-chess-knight"></i></td>
                <td className="white"><i class="fa-solid fa-chess-bishop"></i></td>
                <td className="black"><i class="fa-solid fa-chess-king"></i></td>
                <td className="white"><i class="fa-solid fa-chess-queen"></i></td>
                <td className="black"><i class="fa-solid fa-chess-bishop"></i></td>
                <td className="white"><i class="fa-solid fa-chess-knight"></i></td>
                <td className="black"><i class="fa-solid fa-chess-rook"></i></td>
            </tr>
            <tr>
                <td className="black"><i class="fa-solid fa-chess-pawn"></i></td>
                <td className="white"><i class="fa-solid fa-chess-pawn"></i></td>
                <td className="black"><i class="fa-solid fa-chess-pawn"></i></td>
                <td className="white"><i class="fa-solid fa-chess-pawn"></i></td>
                <td className="black"><i class="fa-solid fa-chess-pawn"></i></td>
                <td className="white"><i class="fa-solid fa-chess-pawn"></i></td>
                <td className="black"><i class="fa-solid fa-chess-pawn"></i></td>
                <td className="white"><i class="fa-solid fa-chess-pawn"></i></td>
            </tr>
            <tr>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black "></td>
            </tr>
            <tr>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
            </tr>
            <tr>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
            </tr>
            <tr>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
                <td className="black"></td>
                <td className="white"></td>
            </tr>
            <tr>
                <td className="white"><i class="fa-regular fa-chess-pawn"></i></td>
                <td className="black"><i class="fa-regular fa-chess-pawn"></i></td>
                <td className="white"><i class="fa-regular fa-chess-pawn"></i></td>
                <td className="black"><i class="fa-regular fa-chess-pawn"></i></td>
                <td className="white"><i class="fa-regular fa-chess-pawn"></i></td>
                <td className="black"><i class="fa-regular fa-chess-pawn"></i></td>
                <td className="white"><i class="fa-regular fa-chess-pawn"></i></td>
                <td className="black"><i class="fa-regular fa-chess-pawn"></i></td>
            </tr>
            <tr>
                <td className="black"><i class="fa-regular fa-chess-rook"></i></td>
                <td className="white"><i class="fa-regular fa-chess-knight"></i></td>
                <td className="black"><i class="fa-regular fa-chess-bishop"></i></td>
                <td className="white"><i class="fa-regular fa-chess-queen"></i></td>
                <td className="black"><i class="fa-regular fa-chess-king"></i></td>
                <td className="white"><i class="fa-regular fa-chess-bishop"></i></td>
                <td className="black"><i class="fa-regular fa-chess-knight"></i></td>
                <td className="white"><i class="fa-regular fa-chess-rook"></i></td>
            </tr>
            
        </table>
      </div>
    </>
  );
}
