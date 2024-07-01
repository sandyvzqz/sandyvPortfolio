import profilePic from '../assets/images/profilepic.jpg';

const About = () => {
    return (
    <section>
        <h1>About Me</h1>
            <div>
                <img className="profilePic" src={profilePic} alt="profile picture"/>
                <div className="aboutContent">
                    <p> Hello, my name is Sandy Vazquez!</p>
                    <p> This year I began my journey to become a web developer, and it has not been easy. There were many times that I thought about giving up because it was very challenging, but I am proud of myself for overcoming those feelings of failure and learning from them. I believe that hard work and dedication go hand-in-hand with success.</p>
                    <p> Throughout the course of this bootcamp, I have learned so much in such a short amount of time. Talk about information overload! One of the things that really helped me solidify learning material was trying to explain concepts to other people, even my dogs! It sounds crazy, but teaching someone else is a faster way to learn concepts.</p>
                    <p> When i'm not talking code to my dogs, I like to spend my time doing physical activities like: hiking, running, working out, and exploring nature. I love spending time outdoors, especially with my huskies, who always love tagging along for an adventure in the great outdoors. I like to live by the motto "Live life to the fullest", and I also incorporate that motto into my dogs lives; we like to experience the world around us and have fun while doing it.</p>
                    <p> Another one of my hobbies is traveling with my husband, we have taken a vacation every year since we got married. So far we've been to Mexico, and Italy. This year we are going to France & I cannot wait! I love experiencing new cultures and customs, and FOOD above all else! Traveling is a luxury and I am so thankful to have the opportunity to see the world.</p>
                    <p> My hopes for the future are that I can work remotely and be able to eventually raise a family. I am excited to see what the future holds!</p>
                </div>
            </div>
    </section>
    );
}

export default About;