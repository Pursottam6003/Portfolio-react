import React from 'react'
// import Calculator from '../images/calculator.webp'
// import DesktopAssistent from '../images/assistent.png'
// import BakewithLove from '../images/bakeWithLove.jpg'
// import Encourager from '../images/Discord-bot.png'
// import ToDoList from '../images/todolist.webp'
// import TypingGame from '../images/typingmbl.png'
// import BankManagement from '../images/bank.png'
// import RockPaperScissor from '../images/rock_paper_ssr.webp'
import CardComponent from './CardComponent'

export const Projects = () => {
    return (
        <>
            <div className="ProjectExperience reveal" id="myprojects">
                    <img src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-project-project-management-itim2101-flat-itim2101-1.png"
                        id="projecticon" alt="exper" />
                <h2>My Projects</h2>
                <div className="ani">
                    <div className="bar"></div>
                </div>
                <br />
                <br />
                <br />
                {/* <div className="learn">

                    <div className="exp">
                        <div className="imageexp6">
                            <a href="#" target="_blank"><img src={BakewithLove} alt="calculator img"
                                id="exp6" /></a>
                        </div>
                        <div className="info1">
                            <a href="#" target="_blank">
                                <h3>Ecommerce App</h3>
                            </a>
                            <p>⚡  Developed E-Commerce Web application Bake with Love
                            </p>
                            <p>⚡ ReactJs is used in the frontend and Firebase is used at the backend for server authentication, Databases, and Cart Products.
                            </p>
                            <a href="#"><button type="button" className="Readmore">Read More</button></a>

                            <br />
                        </div>
                    </div>


                    <div className="exp">
                        <div className="imageexp7">
                            <a href="https://github.com/Pursottam6003/Provoitus001-Desktop-Assistence-" target="_blank"><img
                                src={DesktopAssistent} alt="Desktop Assistent" id="exp7" /></a>
                        </div>
                        <div className="info1">
                            <a href="https://github.com/Pursottam6003/Provoitus001-Desktop-Assistence-" target="_blank">
                                <h4>Provitous-001 (Desktop Assistent)</h4>
                            </a>
                            <p>⚡ My Personal Virtual Desktop Assistent capable to perfoming all the daily tasks and helps in
                                saving precious time
                            </p>
                            <p>
                                ⚡It can perform tasks such as Opening/Closeing apps,schdule tasks,read news,read books,play
                                music bhajans etc
                            </p>
                            <a href="https://github.com/Pursottam6003/Provoitus001-Desktop-Assistence-"><button
                                type="button" className="Readmore">Read More</button></a>
                            <br />
                        </div>
                    </div>

                    <div className="exp">
                        <div className="imageexp8">
                            <a href="https://github.com/Pursottam6003/Discord-Bot-" target="_blank"><img
                                src={Encourager} alt="calculator img" id="exp8" /></a>
                        </div>
                        <div className="info1">
                            <a href="https://github.com/Pursottam6003/Discord-Bot-" target="_blank">
                                <h4>Encourager (Discord-Bot)</h4>
                            </a>
                            <p>⚡ It is a Discord Meme Bot designed for the School and College Students for having fun and
                                healthy communication.
                            </p>
                            <p>
                                ⚡ It Encourages users and on the basis of their chat keywords replies to them within the
                                server
                            </p>
                            <a href="https://github.com/Pursottam6003/Discord-Bot-"><button type="button"
                                className="Readmore">Read More</button></a>
                            <br />
                        </div>
                    </div>

                    <div className="exp">
                        <div className="imageexp1">
                            <a href="https://pursottam6003.github.io/project-internship/" target="_blank"><img
                                src={Calculator} alt="calculator img" id="exp1"
                                style={{ margin: "auto", display: "block" }} /></a>
                        </div>
                        <div className="info1">
                            <a href="https://pursottam6003.github.io/project-internship/" target="_blank">
                                <h4>Calculator</h4>
                            </a>
                            <p>⚡ A simple calculator created with the help of HTML, CSS
                                and JavaScript.
                            </p>
                            <p>
                                ⚡It can calculate up to 12 digits numbers and
                                perform basic operation like addition, subtraction, multiplication, division ,square
                                root,logrithemic calculation etc
                            </p>
                            <a href="https://pursottam6003.github.io/project-internship/"><button type="button"
                                className="Readmore">Read More</button></a>
                            <br />
                        </div>
                    </div>


                    <div className="exp">
                        <div className="imageexp2">
                            <a href="https://github.com/Pursottam6003/project-internship/tree/main/To-do-list"
                                target="_blank"><img src={ToDoList} alt="image todolist" id="exp2" /></a>
                        </div>
                        <div className="info2">
                            <a href="https://github.com/Pursottam6003/project-internship/tree/main/To-do-list"
                                target="_blank">
                                <h4>To-Do-List</h4>
                            </a>
                            <p>⚡ Command Line intregrated Java Program implemented for To-do-list memo
                                application ,this can perform addition,removal and completion tasks
                                on the basis of priority given by user.
                            </p>
                            <p>
                                ⚡ Also it provides the status of tasks completed and whole record of
                                data can be stored into the CSV file.
                            </p>
                            <a href="https://github.com/Pursottam6003/project-internship/tree/main/To-do-list"><button
                                type="button" className="Readmore">Read More</button></a>
                            <br />
                        </div>
                    </div>


                    <div className="exp">
                        <div className="imageexp3">
                            <a href="https://pursottam6003.github.io/TypingGame/" target="_blank"><img
                                src={TypingGame} alt="image typing " id="exp3" /></a>
                        </div>
                        <div className="info3">
                            <a href="https://pursottam6003.github.io/TypingGame/" target="_blank">
                                <h4>Typing Game</h4>
                            </a>
                            <p>⚡ In this game, I had explored how events work in JavaScript. My game is going to test a
                                player's typing skill, which is one of
                                the most underrated skills all developers should have.
                            </p>
                            <p>
                                ⚡ Player types the quote as quickly as they can if the word is
                                correct then the next word will be highlighted.If wrong or mistake in typing it will show
                                error and at the end
                                show accuracy and time taken
                            </p>
                            <a href="https://pursottam6003.github.io/TypingGame/"><button type="button"
                                className="Readmore">Read More</button></a>
                            <br />
                        </div>

                    </div>

                    <div className="exp">
                        <div className="imageexp4">
                            <a href="https://github.com/Pursottam6003/C-Programming--games/blob/main/bank_management.c"
                                target="_blank"><img src={BankManagement} alt="Bank Management" id="exp4" /></a>
                        </div>
                        <div className="info4">
                            <a href="https://github.com/Pursottam6003/C-Programming--games/blob/main/bank_management.c"
                                target="_blank">
                                <h4>Bank Management</h4>
                            </a>
                            <p>⚡ This program is solely dedicated for bank employees for registration of people in a village
                                area.

                            </p>
                            <p>
                                ⚡ After registration if they got tired then the browser will open automatically and the
                                employee coould open Whats App,Instagram,Facebook,LinkdIn or Youtube and relax their leisure
                                time.
                            </p>
                            <a href="https://github.com/Pursottam6003/C-Programming--games/blob/main/bank_management.c"><button
                                type="button" className="Readmore">Read More</button></a>
                        </div>
                    </div>

                    <div className="exp">
                        <div className="imageexp5">
                            <a href="https://github.com/Pursottam6003/C-Programming--games/blob/main/Rock_ppr_ssr_game.c"
                                target="_blank"><img src={RockPaperScissor} alt="Bank Management"
                                    id="exp5" /></a>
                        </div>
                        <div className="info5">
                            <a href="https://github.com/Pursottam6003/C-Programming--games/blob/main/Rock_ppr_ssr_game.c"
                                target="_blank">
                                <h4>Rock Paper Scissor</h4>
                            </a>
                            <p>⚡ This was my first project of my life 'The Rock-paper_scissor Game'.
                            </p>
                            <p>
                                ⚡ From nursury we are famaliar with this game and i had just implemented this game in C
                                Programming Language hope you all may like.
                            </p>
                            <a href="https://github.com/Pursottam6003/C-Programming--games/blob/main/Rock_ppr_ssr_game.c"><button
                                type="button" className="Readmore">Read More</button></a>
                        </div>
                    </div>
                </div> */}
                <CardComponent/>
            </div>

            <div className='viewBlogs'>
                View More
            </div>
        </>
    )
}
