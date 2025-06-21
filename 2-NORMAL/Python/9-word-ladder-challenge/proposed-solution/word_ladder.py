from collections import deque

def word_ladder(begin_word, end_word, word_list):
    word_set = set(word_list)
    if end_word not in word_set:
        return []

    queue = deque([(begin_word, [begin_word])])
    visited = set([begin_word])

    while queue:
        current_word, path = queue.popleft()
        if current_word == end_word:
            return path

        for i in range(len(current_word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                next_word = current_word[:i] + c + current_word[i+1:]
                if next_word in word_set and next_word not in visited:
                    visited.add(next_word)
                    queue.append((next_word, path + [next_word]))

    return []
