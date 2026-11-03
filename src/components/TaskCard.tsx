import { StyleSheet, Text, View } from 'react-native';

import type { Task } from '@/types/task';

type TaskCardProps = {
  task: Task;
};

export function TaskCard({ task }: TaskCardProps) {
  return (
    <View style={styles.card}>
      {/* Style array: later styles override earlier; `false` is ignored */}
      <Text style={[styles.title, task.done && styles.done]}>{task.title}</Text>

      {/* Conditional rendering: badge only if priority exists */}
      {task.priority && (
  <Text style={[styles.priority, task.priority === 'high' && styles.high]}>
    {task.priority}
  </Text>
)}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f2f2f7',
  },
  title: { fontSize: 16 },
  done: { textDecorationLine: 'line-through', color: '#999' },
  priority: { fontSize: 12, color: '#666' },
    high: { color: 'red', fontWeight: 'bold' },
});