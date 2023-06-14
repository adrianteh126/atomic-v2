import { ref } from 'vue'
import { useRouter } from 'vue-router';

const getUser = () => {

    const router = useRouter();

    const state = ref({
        user: {},
        newUserName: '',
        newEmail: '',
        newPassword: '',
        newConfirmPassword: ''
    })

    const getUserById = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/user/get/${id}`)
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.error)
            }
            state.value.user = data
            console.log('Get user by id:', data._id)
        } catch (error) {
            console.error('Error retrieving user:', error)
            // Handle error state or show error message to the user
        }
    }

    const deleteUser = (_id) => {
        fetch(`http://localhost:3000/user/delete/${_id}`, { method: "DELETE" })
            .then(console.log('modules/usercrud.js : Delete user by id ' + _id))
    }

    const updateUser = (userId) => {
        // const { user_name, email, password, confirm_password } = state.value; // Get the user inputs from the state
        const user_name = state.value.newUserName;
        const email = state.value.newEmail;
        const password = state.value.newPassword;
        const confirm_password = state.value.newConfirmPassword;

        if (password !== confirm_password) {
            console.error('Password does not match confirmation'); // Log the error message
            // Handle error state or show error message to the user
            return;
        }

        const updates = {
            user_name,
            email,
            password
        };

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
                // "auth-token": state.token
            },
            body: JSON.stringify(updates)
        };

        fetch(`http://localhost:3000/user/update/${userId}`, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log('Updated user:', data);
                // Handle success state or show success message to the user
            })
            .catch(error => {
                console.error('Error updating user:', error);
                // Handle error state or show error message to the user
            });

        router.push('/dashboard/settings');
    };



    return {
        state,
        getUserById,
        deleteUser,
        updateUser
    }
}

export default getUser
