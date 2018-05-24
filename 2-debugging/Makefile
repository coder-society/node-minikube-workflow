REGISTRY=codersociety
REPO=node-api
TIMESTAMP=tmp-$(shell date +%s )

create:
	@eval $$(minikube docker-env) ;\
	docker build -t $(REGISTRY)/$(REPO):create .
	kubectl apply -f kubernetes/

update:
	@eval $$(minikube docker-env) ;\
	docker build -t $(REGISTRY)/$(REPO):$(TIMESTAMP) .
	kubectl set image -f ./kubernetes/deployment.yaml $(REPO)=$(REGISTRY)/$(REPO):$(TIMESTAMP)

delete:
	kubectl delete -f kubernetes/