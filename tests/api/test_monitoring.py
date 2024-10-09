from backend.api.monitoring import heartbeat


def testheartbeat():
    beat = heartbeat()
    assert "<3" == beat


def test_get_heartbeat(client):
    response = client.get("/api/monitoring/heartbeat")
    assert response is not None
    assert 200 == response.status_code
    assert "<3" == response.text
