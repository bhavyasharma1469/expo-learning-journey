import { StyleSheet, Text, View } from 'react-native';

import { TaskCard } from '@/components/TaskCard';
import type { Task } from '@/types/task';

const SAMPLE_TASKS: Task[] = [
  { id: '1', title: 'Install Expo Go', done: true },
  { id: '2', title: 'Learn components', done: false, priority: 'high' },
  { id: '3', title: 'Build the task form', done: false, priority: 'medium' },
  { id: '4', title: 'Push code to GitHub', done: true, priority: 'high' },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Tasks</Text>

      {SAMPLE_TASKS.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  heading: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
});