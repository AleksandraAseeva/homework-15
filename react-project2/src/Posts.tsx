import { createRoot } from "react-dom/client";
import posts from "./data/posts.json"
import styled from "styled-components"
import { useState } from "react";

export const PostCard = styled.div`
border: 1px solid black;
border-radius: 1rem;
max-width: calc(50% - 1rem);
position: relative;
background-color:#3b3b3b;
color: white;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 600px) {
max-width: none;
}

@media (min-width: 990px) {
max-width: calc(25% - 1rem);
gap: 2rem;
}
`;

export const PostList = styled.div`
display: flex;
gap: 1rem;
flex-wrap: wrap;
margin: 1rem;

@media (max-width: 600px) {
flex-direction: column;
margin: 0.5rem;
}
`;

const DescriptionCard = styled.div`
padding: 0 1rem 1rem;
font-size: 1.2rem;
`;


const Menu = styled.div`
display: flex;
gap: 0.5rem;
text-decoration: none;
padding: 0 1rem 1rem;
`;

const MenuAll = styled.div`
background: rgba(11,38,11,0);
`;


createRoot(document.getElementById('root')!).render(
    <App />

)
// если бы не поставили ! была бы ошибка, так как может вернутся нал, но мы точно знаем, что что-то вернется

function App() {

    const [menuPostId, setMenuPostId] = useState(0);

    function cardClicked(postId: number) {
        setMenuPostId(postId == menuPostId ? 0 : postId);
    }

    return (
        <>
            <div>Posts Demo</div>
            <hr />
            <PostList>
                {
                    posts.map(post =>
                        <PostCard >
                            <div>
                            <img style={{width: '100%', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}} src={post.image} alt="" />
                            </div>
                            <DescriptionCard>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            </DescriptionCard>
                            <MenuAll key={post.id} onClick={() => cardClicked(post.id)}>
                            {menuPostId != post.id && <p style={{paddingBottom: '2rem', margin: '0', fontSize: '1.5rem'}}>...</p>}
                            {menuPostId == post.id &&
                                <Menu>
                                    <div><a style={{color: '#cdcbcb', textDecoration:'none'}} href="#">Edit</a></div>
                                    <div><a style={{color: '#d17d7d', textDecoration:'none'}} href="#">Delete</a></div>
                                    <div><a style={{color: '#86c688', textDecoration:'none'}} href="#">Favorite</a></div>
                                    <div><a style={{color: 'white', textDecoration:'none'}} href="#">✓</a></div>
                                </Menu>
                            }
                            </MenuAll>
                        </PostCard>
                    )
                }
            </PostList>
        </>
    )
}