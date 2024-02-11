from qdrant_client import models, QdrantClient
from sentence_transformers import SentenceTransformer


def init_qdrant():
    qdrant_client = QdrantClient(
        "https://2440eff1-bd4d-4080-bffd-bdb046f95447.us-east4-0.gcp.cloud.qdrant.io",
        api_key="v_cLOKp3fNY1HsUwpGRpxy_PyY3fsmARz46M8GyWfkkRrJHe_7uehQ",
    )

    return qdrant_client

def get_context(user_query, k = 5, encoder=SentenceTransformer("all-MiniLM-L6-v2")):
    qdrant = init_qdrant()

    hits = qdrant.search(
        collection_name="hotels",
        query_vector=encoder.encode(user_query).tolist(),
        limit=k,
    )

    answers = []
    for h in hits:
        answers.append(h)
    return answers


