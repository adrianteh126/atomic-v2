import { ref } from 'vue'
import { useRouter } from 'vue-router';

const getUser = () => {

    const router = useRouter();

    const state = ref({
        user: {},
        newUserName: '',
        newEmail: '',
        newPassword: '',
        newConfirmPassword: '',
        newImageUrl: '',
    })

    const getUserById = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/user/get/${id}`)
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.error)
            }
            state.value.user = data
            console.log('client/src/modules/usercrud.js Get user by id:', data._id)
        } catch (error) {
            console.error('Error retrieving user:', error)
            // Handle error state or show error message to the user
        }
    }

    const deleteUser = (_id) => {
        fetch(`http://localhost:3000/user/delete/${_id}`, { method: "DELETE" })
            .then(console.log('modules/usercrud.js : Delete user by id ' + _id))

        alert('Sucessfully detele the user account!')
        router.replace('/') // Nav to landing page

    }

    const updateUser = (userId) => {
        // const { user_name, email, password, confirm_password } = state.value; // Get the user inputs from the state
        const user_name = state.value.newUserName;
        const email = state.value.newEmail;
        const password = state.value.newPassword;
        const confirm_password = state.value.newConfirmPassword;
        const image_url = state.value.newImageUrl;

        if (password !== confirm_password) {
            const errorMessage = 'Password does not match confirmation';
            console.error(errorMessage); // Log the error message
            // Prompt the user with the error message (e.g., using an alert or a notification component)
            alert(errorMessage);

            return;
        }

        const updates = {
            user_name,
            email,
            password,
            image_url,
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
                alert('Sucessfully update the user detail!')
                // For refresh the page upon sucess update
                router.replace('/dashboard') // Push to a temporary route
                    .then(() => {
                        router.replace('/dashboard/settings'); // Push back to the original route
                    });

            })
            .catch(error => {
                console.error('Error updating user:', error);
                // Handle error state or show error message to the user
            });

    };


    return {
        state,
        getUserById,
        deleteUser,
        updateUser
    }
}

export default getUser
