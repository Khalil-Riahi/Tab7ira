import networkx as nx
import matplotlib.pyplot as plt

# Create a graph
G = nx.Graph()

# Define the graph from the adjacency list
graph = {
    'A': [('B', 7), ('E', 14)],
    'B': [('C', 8)],
    'C': [('D', 6)],
    'D': [('A', 18), ('F', 11)],
    'E': [('F', 19)],
    'F': [('G', 4), ('H', 13)],
    'G': [('C', 5), ('H', 8)],
    'H': [('C', 9)]
}

# Add nodes and edges with weights
for node, edges in graph.items():
    for edge, weight in edges:
        G.add_edge(node, edge, weight=weight)

# Draw the graph
pos = nx.spring_layout(G, seed=42)  # positions for all nodes
nx.draw(G, pos, with_labels=True, font_weight='bold', node_size=700, node_color='skyblue')

# Draw the edge labels
edge_labels = nx.get_edge_attributes(G, 'weight')
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels)

plt.show()
