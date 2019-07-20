<script>
	import * as firebase from 'firebase/app';
	import 'firebase/firestore';

	const db = firebase.firestore();
</script>

<style>
</style>

{#await db.collection('meetups').get()}
	<p>...waiting</p>
{:then meetups}
	{#each meetups.docs as meetup}
		{meetup.data().id} / {meetup.data().title} / {meetup.data().date.toDate()}
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
