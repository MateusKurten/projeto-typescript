const chat1 = `
    <li class="message right appeared message-text">
        <div class="avatar"></div>
        <div class="text_wrapper">
            <div class="text">texto_aqui</div>
        </div>
    </li>
`;

const chat2 = `
    <li class="message left appeared message-text">
        <div class="avatar"></div>
        <div class="text_wrapper">
            <div class="text">texto_aqui</div>
        </div>
    </li>
`;

const user = JSON.parse(window.localStorage.getItem("user"));
document.getElementById('chat_menu_title').innerHTML = user.admin ? 'Donors' : 'Administrators';


const messages = document.getElementById('messages');
const chat_window = document.getElementById('chat_window');
const other_user_name = document.getElementById('other_user_name');
let other_user = {};

const loadChat = async (user_id, other_user_id, other_user_name) => {
    other_user = {
        id: other_user_id,
        name: other_user_name
    }

    other_user_name.innerHTML = other_user_name;

    const response = await fetch(`${window.location.origin}/load?user_id=${user_id}&other_user_id=${other_user_id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json();

    let lis = ''
    json.rows.forEach(async (chat) => {
        if(chat.user_sender === user.id){
            lis += chat1.replace('texto_aqui', chat.message);
        }else{
            lis += chat2.replace('texto_aqui', chat.message);
        }
    })

    messages.innerHTML = lis;
    document.getElementsByClassName('messages')[0].scrollTop = document.getElementsByClassName('messages')[0].scrollHeight;
    chat_window.style.display = 'block';
}

closeChat = () => {
    chat_window.style.display = 'none';
    messages.innerHTML = '';
}

const logout = () => {
    window.localStorage.clear();
    window.location.href = `${window.location.origin}/auth/login`
}

const getChatList = async (isAdmin) => {
    const type = isAdmin ? 'donors' : 'admins';
    const response = await fetch(`${window.location.origin}/users?type=${type}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();

    let lis = ''

    for(const item of json.result){
        lis += `<li onclick="loadChat(${user.id}, ${item.id}, '${item.name}')" class="list-group-item">${item.name}</li>`
    }

    document.getElementById('chat_list').innerHTML = lis;
}

const updateMessage = (type, message) => {
    let li = ''
    if(type === 1){
        li = chat1.replace('texto_aqui', message);
    }else{
        li = chat2.replace('texto_aqui', message);
    }
    const lis = document.getElementsByClassName('message-text');

    if(lis.length > 0){
        lis[lis.length - 1].insertAdjacentHTML('afterend', li);
    } else{
        messages.innerHTML = li;
    }
    
    
    document.getElementsByClassName('messages')[0].scrollTop = document.getElementsByClassName('messages')[0].scrollHeight;
}

document.getElementById('form-chat').addEventListener('submit', function(event) {
    event.preventDefault();

    const message_input = document.getElementById('message_input');
    const message = message_input.value;

    sendMessageSocket(message);
    updateMessage(1, message);

    message_input.value = '';
});

const sendMessageSocket = (message) => {
    const socket = io();

    socket.emit('SEND_MESSAGE', {
        user_sender: user.id,
        user_receptor: other_user.id,
        message: message
    });
}

const ouvirMessage = () => {
    const socket = io();

    socket.on('RECEIVE_MESSAGE', function(data){
        if(data.user_sender === other_user.id){
            updateMessage(2, data.message);
        }
    });
}

ouvirMessage();
getChatList(user.admin);